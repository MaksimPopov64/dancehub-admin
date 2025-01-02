import { AdminNews } from "@/components/AdminNews";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
          <Link to="/">
            <Button variant="outline">Back to Site</Button>
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <AdminNews />
      </main>
    </div>
  );
};

export default Admin;