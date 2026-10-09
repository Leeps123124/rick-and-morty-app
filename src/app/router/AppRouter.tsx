import { Routes, Route, Navigate } from "react-router-dom";
import CharactersPage from "../../pages/characters/ui/CharactersPage";
import FavoritesPage from "../../pages/favorites/ui/FavoritesPage";
import CharacterDetailsPage from "../../pages/character-details/ui/CharacterDetailsPage";
import NotFoundPage from "../../pages/not-found/ui/NotFoundPage";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/characters" element={<CharactersPage />}></Route>
      <Route path="/favorites" element={<FavoritesPage />}></Route>
      <Route path="/characters/:id" element={<CharacterDetailsPage />}></Route>
      <Route path="/404" element={<NotFoundPage />}></Route>
      <Route path="/" element={<Navigate to="/characters" replace />}></Route>
      <Route path="/*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
