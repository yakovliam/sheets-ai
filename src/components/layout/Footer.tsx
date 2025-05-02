const Footer = () => {
  return (
    <div className="flex items-start border-t border-border">
      <div className="p-4 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Your Company
      </div>
    </div>
  );
};

export default Footer;
