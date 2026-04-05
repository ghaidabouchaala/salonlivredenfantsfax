import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-32 text-center space-y-6">
        <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/30" />
        <h1 className="font-heading text-6xl font-bold text-foreground">404</h1>
        <p className="text-lg text-muted-foreground">Cette page n'existe pas. / This page doesn't exist.</p>
        <Link to="/">
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Retour à l'accueil / Back home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
