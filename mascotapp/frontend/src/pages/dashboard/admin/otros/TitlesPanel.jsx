const TitlesPanel = () => {
  return (
    <div className="flex overflow-x-scroll flex-wrap items-center justify-between bg-slate-300 py-5 px-10 rounded-md mb-5">
      <p className="text-center w-full md:w-auto mb-2 md:mb-0 md:mr-4">Id</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Nombre</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Fecha registro</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Dirección</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 hidden md:block">Teléfono</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 md:hidden">E-mail</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 hidden md:block">Monto</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Modificar</p>
    </div>
  );
};

export default TitlesPanel;
