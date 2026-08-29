# Solución al Error: `Duplicate resources` en `mergeDebugAssets`

## Causa del Error

El error **`Resource and asset merger: Duplicate resources`** ocurre porque los archivos de fuentes de iconos (`.ttf`) se estaban suministrando por dos vías simultáneas:

1. **Vía Automática (Gradle)**: La línea `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` en `android/app/build.gradle` copia dinámicamente las fuentes desde `node_modules` hacia `build/intermediates/ReactNativeVectorIcons/fonts`.
2. **Vía Manual**: La carpeta `android/app/src/main/assets/fonts/` contenía manualmente los mismos archivos `.ttf`.

Al ejecutar la tarea `:app:mergeDebugAssets`, Gradle encuentra archivos idénticos en dos ubicaciones de assets distintas y falla la compilación.

---

## Pasos para Corregir el Error

### Paso 1: Eliminar la carpeta manual de fuentes en Android
Dado que `fonts.gradle` se encarga de importar las fuentes automáticamente durante la compilación, se debe eliminar la carpeta física de assets manuales:

```bash
rm -rf android/app/src/main/assets/fonts
```

### Paso 2: Verificar `android/app/build.gradle`
Asegurarse de que `android/app/build.gradle` mantenga la inclusión de `fonts.gradle` al final del archivo:

```groovy
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### Paso 3: Limpiar el Build de Gradle y volver a ejecutar

Para limpiar la caché del build previo y recompilar limpiamente:

```bash
# En la raíz del proyecto
cd android && ./gradlew clean && cd ..

# Volver a ejecutar el proyecto
npm run android
```

---

## Resumen de Configuración Correcta

- **Android**: `fonts.gradle` automático (sin archivos `.ttf` manuales en `src/main/assets/fonts`).
- **iOS**: `UIAppFonts` en `ios/sesion10/Info.plist`.
- **Linking CLI**: `react-native.config.js` en la raíz del proyecto.
