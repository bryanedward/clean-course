(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fileEvaluate = [
        { idUnique: 1, validateUser: false },
        { idUnique: 2, validateUser: false },
        { idUnique: 3, validateUser: true },
        { idUnique: 4, validateUser: false },
        { idUnique: 5, validateUser: false },
        { idUnique: 7, validateUser: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = fileEvaluate.map( file => file.validateUser );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface User { };

    // Mejor
    class User { };
    interface User { };

    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const nameUser = 'Fernando';
    
    // primer apellido - last name
    const lastNameUser = 'Herrera';

    // días desde la última modificación - days since modification
    const daysLastModifcation = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const limitStudent = 6;


})();

