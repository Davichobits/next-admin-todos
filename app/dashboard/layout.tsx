import { Sidebar, Topmenu } from '@/components';


export default function DashboardLayout(
  {
  children
  }: {
    children: React.ReactNode;
  }
) {
  return (
    <>
      <Sidebar />
      <h1>SideBar</h1>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <Topmenu />

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6">
          {children}
        </div>
      </div>
    </>
  );
}