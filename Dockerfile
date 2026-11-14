# Usamos una imagen oficial de Python ligera (slim)
FROM python:3.12-slim

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de tu carpeta actual al contenedor
COPY . .

# Exponemos el puerto 8000
EXPOSE 8000

# Ejecutamos el servidor (en Linux se usa 'python' o 'python3', no 'py')
# Usamos -u para que los logs se muestren en tiempo real en la consola de Docker
CMD ["python", "-u", "-m", "http.server", "8000"]