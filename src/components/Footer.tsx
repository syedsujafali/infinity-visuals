const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-lg font-bold mb-3">
            <span className="gradient-text">Infinity</span> Engineering
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Engineering precision for modern infrastructure. Designing the future, one project at a time.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Process", "Projects", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>contact@infinityengineering.com</p>
            <p>+1 (347) 666-7366</p>
            <p>100 Innovation Drive, Suite 200</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Infinity Engineering Consulting. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
