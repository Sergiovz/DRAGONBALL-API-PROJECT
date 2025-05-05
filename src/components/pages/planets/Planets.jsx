import { useFetch } from "../../../hooks/useFetch";
import { ErrorMessage } from "../../atoms/error/ErrorMessage";
import { Loading } from "../../atoms/loading/Loading";
import { PaginationControls } from "../../organisms/paginationsControl/PaginationControls";
import PageTemplate from "../../templates/pageTemplate/PageTemplate";
import { PlanetList } from "./PlanetList";
import "./planets.css";

const API_URL = "https://dragonball-api.com/api/planets";

const Planets = () => {
  const { data, loading, error, pagination, navigateTo } = useFetch(API_URL);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <PageTemplate title="Planets">
        <PaginationControls pagination={pagination} onPageChange={navigateTo} />
        <PlanetList planets={data?.items || []} />
      </PageTemplate>
    </>
  );
};

export default Planets;
