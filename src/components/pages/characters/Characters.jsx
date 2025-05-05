import { CharacterList } from "./CharacterList";
import PageTemplate from "../../templates/pageTemplate/PageTemplate";
import { PaginationControls } from "../../organisms/paginationsControl/PaginationControls";
import { Loading } from "../../atoms/loading/Loading";
import { ErrorMessage } from "../../atoms/error/ErrorMessage";
import { useFetch } from "../../../hooks/useFetch";

const API_URL = "https://dragonball-api.com/api/characters?limit=8";

const Characters = () => {
  const { data, loading, error, pagination, navigateTo } = useFetch(API_URL);

  if (loading) return <Loading />;
  
  if (error) return <ErrorMessage message={error} />;

  return (
    <PageTemplate title="CHARACTERS">
      <PaginationControls pagination={pagination} onPageChange={navigateTo} />
      <CharacterList characters={data?.items || []} />
    </PageTemplate>
  );
};

export default Characters;
