// import avatar from '../../data/avatar.jpg';

const estudiantes = [
  {
    nombre: "Juan",
    apellidos: "Gómez",
    matricula: "1000-29995",
    estatus: "activo",
    imagen: "/src/data/avatar4.jpg",
  },
  {
    nombre: "María",
    apellidos: "López",
    matricula: "1001-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen2.jpg",
  },
  // Primeros 20 estudiantes
  {
    nombre: "Pedro",
    apellidos: "Ramírez",
    matricula: "1019-29995",
    estatus: "Pausa",
    imagen: "https://ejemplo.com/imagen20.jpg",
  },
  {
    nombre: "Ana",
    apellidos: "Fernández",
    matricula: "1020-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen21.jpg",
  },
  {
    nombre: "Luis",
    apellidos: "Martínez",
    matricula: "1021-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen22.jpg",
  },
  {
    nombre: "Laura",
    apellidos: "García",
    matricula: "1022-29995",
    estatus: "Pausa",
    imagen: "https://ejemplo.com/imagen23.jpg",
  },
  {
    nombre: "Carlos",
    apellidos: "Hernández",
    matricula: "1023-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen24.jpg",
  },
  {
    nombre: "Isabel",
    apellidos: "Pérez",
    matricula: "1024-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen25.jpg",
  },
  {
    nombre: "Andrés",
    apellidos: "Rodríguez",
    matricula: "1025-29995",
    estatus: "Pausa",
    imagen: "https://ejemplo.com/imagen26.jpg",
  },
  {
    nombre: "Mónica",
    apellidos: "Díaz",
    matricula: "1026-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen27.jpg",
  },
  {
    nombre: "Gabriel",
    apellidos: "Torres",
    matricula: "1027-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen28.jpg",
  },
  {
    nombre: "Valeria",
    apellidos: "Sánchez",
    matricula: "1028-29995",
    estatus: "Pausa",
    imagen: "https://ejemplo.com/imagen29.jpg",
  },
  {
    nombre: "Felipe",
    apellidos: "Cruz",
    matricula: "1029-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen30.jpg",
  },
  {
    nombre: "Daniela",
    apellidos: "Ortega",
    matricula: "1030-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen31.jpg",
  },
  {
    nombre: "Martín",
    apellidos: "Vargas",
    matricula: "1031-29995",
    estatus: "Pausa",
    imagen: "https://ejemplo.com/imagen32.jpg",
  },
  {
    nombre: "Lucía",
    apellidos: "Mendoza",
    matricula: "1032-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen33.jpg",
  },
  {
    nombre: "Diego",
    apellidos: "Rojas",
    matricula: "1033-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen34.jpg",
  },
  {
    nombre: "Camila",
    apellidos: "Gutiérrez",
    matricula: "1034-29995",
    estatus: "Pausa",
    imagen: "https://ejemplo.com/imagen35.jpg",
  },
  {
    nombre: "Santiago",
    apellidos: "Silva",
    matricula: "1035-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen36.jpg",
  },
  {
    nombre: "Valentina",
    apellidos: "Paz",
    matricula: "1036-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen37.jpg",
  },
  {
    nombre: "Emilio",
    apellidos: "Castro",
    matricula: "1037-29995",
    estatus: "Pausa",
    imagen: "https://ejemplo.com/imagen38.jpg",
  },
  {
    nombre: "Julieta",
    apellidos: "Ramos",
    matricula: "1038-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen39.jpg",
  },
  // AQUI SE PONDRAN LOS EJEMPLOS PARA LOS FORMULARIOS
  {
    nombre: "Mariano",
    apellidos: "Navarro",
    matricula: "1039-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen40.jpg",
  },
  {
    nombre: "Juan",
    apellidos: "Gómez",
    matricula: "1000-29995",
    estatus: "activo",
    imagen: "https://ejemplo.com/imagen1.jpg",
    fecha: "27/04/2023",
    faltaPasantia: true,
    realizoServicioSocial: false,
    recinto: "Recinto A",
    matriculaID: "MAT-001",
    nombreCompleto: "Juan Gómez",
    sexo: "Masculino",
    periodoAcademico: "2023-1",
    materiasOptativas: ["Optativa 1", "Optativa 2", "Optativa 3"],
    carrera: "Ingeniería",
    direccion: "Calle Principal 123",
    sector: "Centro",
    municipio: "Ciudad",
    provincia: "Provincia",
    celular: "809-123-4567",
    telefono: "809-987-6543",
    cedula: "001-2345678-9",
    nombreEmpresa: "Empresa ABC",
    rnc: "123456789",
    direccionEmpresa: "Avenida Principal 456",
    sectorEmpresa: "Zona Industrial",
    municipioEmpresa: "Ciudad Empresarial",
    provinciaEmpresa: "Provincia Empresa",
    telefonoEmpresa: "809-555-1234",
    extension: "123",
    celularEmpresa: "809-555-5678",
    naturalezaEmpresa: "Privada",
    contactoEmpresa: "Pedro Pérez",
    departamentoPasantia: "Departamento de Ingeniería",
    emailEmpresa: "info@empresa.com"
  },
  {
    nombre: "María",
    apellidos: "López",
    matricula: "1001-29995",
    estatus: "activo",
    imagen: "../src/data/avatar2.jpg",
    fecha: "27/04/2023",
    faltaPasantia: false,
    realizoServicioSocial: true,
    recinto: "Recinto B",
    matriculaID: "MAT-002",
    nombreCompleto: "María López",
    sexo: "Femenino",
    periodoAcademico: "2023-1",
    materiasOptativas: ["Optativa 1", "Optativa 2", "Optativa 3"],
    carrera: "Administración",
    direccion: "Calle Secundaria 456",
    sector: "Norte",
    municipio: "Pueblo",
    provincia: "Provincia",
    celular: "809-234-5678",
    telefono: "809-876-5432",
    cedula: "002-3456789-0",
    nombreEmpresa: "Empresa XYZ",
    rnc: "987654321",
    direccionEmpresa: "Avenida Secundaria 789",
    sectorEmpresa: "Zona Comercial",
    municipioEmpresa: "Ciudad Comercial",
    provinciaEmpresa: "Provincia Empresa",
    telefonoEmpresa: "809-555-4321",
    extension: "456",
    celularEmpresa: "809-555-8765",
    naturalezaEmpresa: "Pública",
    contactoEmpresa: "Ana Torres",
    departamentoPasantia: "Departamento de Administración",
    emailEmpresa: "info@empresa.com"
  },
]

export default estudiantes;
