import { useEffect } from "react";
import { Link } from "react-router-dom";
import Privacy from "@/components/landing/Privacy";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Política de Privacidade | Discenttia";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="section-container py-6 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-foreground">
            Discenttia
          </Link>
          <nav className="text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </header>

      {/* Reuse the landing section content */}
      <main>
        <Privacy />
      </main>

      <footer className="py-10 border-t border-border bg-background">
        <div className="section-container text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Discenttia</span>
          <Link to="/" className="hover:text-foreground transition-colors">
            Voltar
          </Link>
        </div>
      </footer>
    </div>
  );
}
