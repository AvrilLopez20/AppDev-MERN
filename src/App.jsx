import Card from "./components/identityCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Component Showcase</h1>
      <div className="flex flex-wrap justify-center">
        <Card
          title="React Basics"
          description="Learn how to create components and props."
          image="https://picsum.photos/300/200"
        />
        <Card
          title="Reusable Components"
          description="Build flexible components for scalability."
          image="https://picsum.photos/300/201"
        />
        <Card
          title="Modern UI Development"
          description="Combine React with Tailwind CSS for fast design."
          image="https://picsum.photos/300/202"
        />
      </div>
    </div>
  );
}
export default App;