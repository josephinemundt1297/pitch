import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { projects } from "../../data";

export const Route = createFileRoute("/_public/projects")({
  validateSearch: (search) => ({
    search: (search.search as string) ?? "",
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { search } = Route.useSearch();
  const navigate = useNavigate();
  const filtered = projects.filter((p) => p.title.includes(search));
  // es filtert die projekte ob sie das eingetippte beinhaltet und gibt das entsprechende ergebnis aus
  return (
    <>
      <div>
        <input
          value={search}
          onChange={(e) =>
            navigate({ to: ".", search: { search: e.target.value } })
          }
          // onChange -> feuert bei jeder Tastatureingabe
          // e -> das Event-Objekt (was passierte in der Tastatur)
          // e.target -> das Input-Element selbst
          // e.target.value -> der aktuelle Text im Input-Feld

          // navigate({ ... }) -> aktualisiert die URL
          // to: "." -> bleib auf der aktuellen Seite
          // search: { search: e.target.value } -> setze ?search= auf den getippten Text
          placeholder="Projekt suchen..."
        />
        {filtered.map((p) => (
          <div key={p.id}>
            <a href={p.link}>{p.title}</a>
          </div>
        ))}
      </div>
    </>
  );
}
