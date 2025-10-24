import type { IWorkbookData } from "@univerjs/presets";

export const WORKBOOK_DATA: Partial<IWorkbookData> = {
  name: "My Workbook",
  sheets: {
    "sheet-1": {
      id: "sheet-1",
      columnCount: 100,
      rowCount: 100,
      name: "Sheet 1",
      cellData: [
        [
          { v: "Enter Your Chat Here", t: 1 },
          { v: "click to submit", t: 1 },
          { v: "paste your openAPI key into this box", t: 1 },
          { v: "ignore me", t: 1 },
        ],
        [{ v: "this is where the response will go", t: 1 }],
      ],
    },
  },
};
