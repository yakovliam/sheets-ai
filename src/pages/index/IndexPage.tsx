import { UniverSheetsCorePreset } from "@univerjs/preset-sheets-core";
import UniverPresetSheetsCoreEnUS from "@univerjs/preset-sheets-core/locales/en-US";

import { createUniver, LocaleType, mergeLocales } from "@univerjs/presets";
import { useEffect, useRef } from "react";

import { UniverSheetsTablePreset } from "@univerjs/preset-sheets-table";
import UniverPresetSheetsTableEnUS from "@univerjs/preset-sheets-table/locales/en-US";

import "@univerjs/preset-sheets-core/lib/index.css";
import "@univerjs/preset-sheets-table/lib/index.css";
import { greenTheme } from "@univerjs/presets";

import { WORKBOOK_DATA } from "./data";

import { GoogleGenAI } from "@google/genai";

const IndexPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { univerAPI } = createUniver({
      theme: greenTheme,
      locale: LocaleType.EN_US,
      locales: {
        [LocaleType.EN_US]: mergeLocales(
          UniverPresetSheetsCoreEnUS,
          UniverPresetSheetsTableEnUS
        ),
      },
      presets: [
        UniverSheetsCorePreset({
          container: containerRef.current!,
          ribbonType: "simple"
          
        }),
        UniverSheetsTablePreset(),
      ],
    });

    univerAPI.createWorkbook(WORKBOOK_DATA);

    univerAPI.addEvent(univerAPI.Event.CellPointerDown, async (params) => {
      const { worksheet, workbook, row, column } = params;
      const clickedCell = worksheet.getRange(row, column).getCell();

      if (!(clickedCell.actualRow == 0 && clickedCell.actualColumn == 1)) {
        return;
      }

      const requestContent = worksheet.getRange(0, 0).getCellData();
      const requestText: string = String(
        requestContent?.v || requestContent?.p?.body?.dataStream
      );

      if (!requestText) {
        alert("request text is not usable");
        return;
      }

      const geminiApiKey: string =
        (worksheet.getRange(0, 2).getCellData()?.v as string) || "";
      const outputCell = worksheet.getRange(1, 0);

      // if api key has whitespace or is empty, return
      if (!geminiApiKey || geminiApiKey.trim() === "") {
        outputCell.setValue({ v: "Invalid API Key" });
        return;
      }

      console.log("requesting: ", requestText);

      const ai = new GoogleGenAI({ apiKey: geminiApiKey });

      let response;
      try {
        response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: requestText,
        });
      } catch {
        outputCell.setValue({ v: "Invalid API Key" });
        return;
      }

      outputCell.setValue({ v: response.text });
    });

    return () => {
      univerAPI.dispose();
    };
  }, []);

  return <div className="h-screen" ref={containerRef} />;
};

export default IndexPage;
