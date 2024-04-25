import UsersRol from "./UsersRol";

const AdminDashB = () => {
  return (
    <section className="mt-[5rem] lg:mt-0 h-[100vh] flex flex-col lg:flex-col justify-center">
      <div className="lg:max-w-7xl mx-auto w-full gap-5">
        <UsersRol />
      </div>
    </section>
  );
};

export default AdminDashB;
