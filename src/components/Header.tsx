import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">GoAhead</div>
        <nav className="flex gap-4">
          <Button variant="ghost">Get Started</Button>
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;