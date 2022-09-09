import { memo } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

interface SideBarItemProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

function SideBarItemComponent({buttonClickCallback, genre, selectedGenreId}: SideBarItemProps) {
  return (
    <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => buttonClickCallback(genre.id)}
            selected={selectedGenreId === genre.id}
          />
  )
}

export const SideBarItem = memo(
  SideBarItemComponent, (prevProps, nextProps) => {
    return (prevProps.genre.id === nextProps.genre.id) && (nextProps.genre.id === nextProps.selectedGenreId)
  }
)

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <SideBarItem buttonClickCallback={buttonClickCallback} genre={genre} selectedGenreId={selectedGenreId} key={genre.id} />
        ))}
      </div>     

    </nav>
  )
}