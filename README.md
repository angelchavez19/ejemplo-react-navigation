# Guía de Clase: Navegación en React Native (Drawer ➔ Tabs ➔ Stack)

Esta aplicación de ejemplo simula una **Tienda de Tecnología (TechStore)** diseñada con la arquitectura exacta de navegación anidada para tu clase.

---

## 1. Diagrama de la Arquitectura de Navegación

![Diagrama de arquitectura](./docs/diagrama.png)

```text
Estructura en Árbol:
Drawer (RootDrawerNavigator)
├── Inicio (HomeScreen)
├── Productos (ProductsStackNavigator)
│    ├── Tabs (ProductsTabsNavigator)
│    │    ├── Todos (AllProductsScreen)
│    │    ├── Favoritos (FavoritesScreen)
│    │    └── Ofertas (OffersScreen)
│    └── Detalle (ProductDetailScreen) [Stack]
├── Pedidos (OrdersScreen)
└── Perfil (ProfileScreen)
```

---

## 2. Explicación de los 3 Tipos de Navegación para la Clase

### 1. **Drawer Navigation (Menú Lateral Deslizable)**

- **Ubicación:** [RootDrawerNavigator.tsx](file:///home/dc9/idat/sesion10resuelto/src/navigation/RootDrawerNavigator.tsx)
- **Opciones:** `Inicio`, `Productos`, `Pedidos`, `Perfil`.
- **Propósito:** Navegación global de alto nivel. Permite cambiar de módulo principal desde cualquier parte de la app mediante un gesto o botón de menú.

### 2. **Bottom Tabs Navigation (Pestañas Inferiores)**

- **Ubicación:** [ProductsTabsNavigator.tsx](file:///home/dc9/idat/sesion10resuelto/src/navigation/ProductsTabsNavigator.tsx)
- **Pestañas:** `Todos`, `Favoritos`, `Ofertas`.
- **Propósito:** Navegación rápida entre subsecciones dentro del módulo de Productos. Conserva el estado de cada vista al cambiar de pestaña.

### 3. **Stack Navigation (Pila de Pantallas / Detalle)**

- **Ubicación:** [ProductsStackNavigator.tsx](file:///home/dc9/idat/sesion10resuelto/src/navigation/ProductsStackNavigator.tsx)
- **Flujo:** Pestañas de Productos ➔ `ProductDetailScreen`.
- **Propósito:** Flujo jerárquico paso a paso. Cuando el usuario toca una tarjeta en cualquiera de las 3 pestañas (Todos, Favoritos u Ofertas), se apila (_push_) la pantalla de detalle con botón para volver atrás (_pop_).

---

## 3. Puntos Clave de Código para Enseñar

### A. Tipado con TypeScript

Definido en [src/types/navigation.ts](file:///home/dc9/idat/sesion10resuelto/src/types/navigation.ts):

```typescript
export type ProductsStackParamList = {
  ProductsTabs: NavigatorScreenParams<ProductsTabParamList>;
  ProductDetail: { product: Product };
};

export type RootDrawerParamList = {
  Inicio: undefined;
  Productos: NavigatorScreenParams<ProductsStackParamList>;
  Pedidos: undefined;
  Perfil: undefined;
};
```

### B. Enviar parámetros al Stack desde una pestaña

```typescript
navigation.navigate('ProductDetail', { product: item });
```

### C. Recibir parámetros y volver atrás

```typescript
const { product } = route.params;
// Para regresar:
navigation.goBack();
```

### D. Abrir el Drawer desde cualquier pantalla o botón

```typescript
import { DrawerActions, useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
navigation.dispatch(DrawerActions.openDrawer());
```

---

## 4. Navegación Dinámica vs Navegación Estática

En React Navigation existen dos paradigmas para declarar las pantallas y navegadores:

### A. Forma Dinámica (Basada en Componentes JSX)

Es la forma implementada en este proyecto (`<Drawer.Navigator>` y `<Drawer.Screen>`):

```tsx
export const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ ... }}>
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Productos" component={ProductsStackNavigator} />
      <Drawer.Screen name="Pedidos" component={OrdersScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
```

**Ventajas y Casos de Uso:**

- **Paradigma React estándar:** Trata a los navegadores y pantallas como componentes estándar de React.
- **Renderizado condicional directo:** Permite mostrar/ocultar pantallas en el flujo de autenticación mediante JSX (`{isLoggedIn ? <AppScreens /> : <AuthScreens />}`).
- **Paso de props y wrappers:** Permite envolver pantallas en componentes contenedores directamente en el JSX.
- **Compatibilidad total:** Compatible con React Navigation v5, v6 y v7.

### B. Forma Estática (Nueva en React Navigation v7)

Define las rutas mediante un objeto de configuración JavaScript y `createStaticNavigation`:

```tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStaticNavigation } from '@react-navigation/native';

const RootDrawer = createDrawerNavigator({
  screens: {
    Inicio: HomeScreen,
    Productos: ProductsStackNavigator,
    Pedidos: OrdersScreen,
    Perfil: ProfileScreen,
  },
});

export const Navigation = createStaticNavigation(RootDrawer);
```

**Ventajas y Casos de Uso:**

- **Inferencia automática de TypeScript:** Deduce los tipos de rutas y parámetros automáticamente sin necesidad de escribir manualmente `ParamList` o tipos de pantallas.
- **Deep Linking simplificado:** Genera la configuración de enlaces profundos analizando el objeto de configuración.
- **Definición única:** Se declara una sola vez fuera del ciclo de renderizado de React.

### Tabla Comparativa

| Criterio             | Forma Dinámica (JSX)                        | Forma Estática (Config Object)                |
| :------------------- | :------------------------------------------ | :-------------------------------------------- |
| Sintaxis             | `<Drawer.Navigator>` + `<Drawer.Screen>`    | `createDrawerNavigator({ screens: { ... } })` |
| Tipado TypeScript    | Manual mediante `ParamList` e interfaces    | Automático e inferido por TypeScript          |
| Flujos condicionales | Operador ternario en JSX (`{user ? A : B}`) | Propiedad condicional `if`                    |
| Curva de aprendizaje | Más intuitiva para quienes conocen JSX      | Requiere aprender la API de configuración     |
| Disponibilidad       | React Navigation v5, v6 y v7                | Exclusivo de React Navigation v7+             |

---

## 5. Instalación cuando desees correr el proyecto

```bash
npm install
```
