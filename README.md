Primer app con React,

Para realizar mi primera app con React decidi crear una To do List,
En esta tenemos un objeto tarea compuesto por id, titulo y descripcion
Cada objeto tarea esta almacenado en un array y tiene que sar mapeado con JS para aparecer en pantalla
Tenemos la opcion de crear una tarea, borrarla e incluso modificarla
Los cambios se guardan al recargar la pagina ya que almacenamos informacion en el localstorage, 
convertimos a string las tareas y posteriormente al iniciar la pagina utilizamos useEffect para que no carge la pagina hasta que no parse las tareas almacenadas en localstorage

Tambien he utilizado tailwind puesto que queria probar como se manejaba esta tecnologia

# react-tasks-app
