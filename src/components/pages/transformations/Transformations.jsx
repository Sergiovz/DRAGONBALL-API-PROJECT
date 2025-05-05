import PageTemplate from "../../templates/pageTemplate/PageTemplate";
import { useFetch } from "../../../hooks/useFetch";
import { Loading } from "../../atoms/loading/Loading";
import { ErrorMessage } from "../../atoms/error/ErrorMessage";
import { PaginationControls } from "../../organisms/paginationsControl/PaginationControls";
import { TransformationList } from "./TranformationList";

const API_URL = "https://dragonball-api.com/api/transformations";

const Transformations = () => {
  const { data, loading, error, pagination, navigateTo } = useFetch(API_URL);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <PageTemplate title="Transformations">
        <PaginationControls pagination={pagination} onPageChange={navigateTo} />
        <TransformationList transformations={data} />
      </PageTemplate>
    </>
  );
};

export default Transformations;
