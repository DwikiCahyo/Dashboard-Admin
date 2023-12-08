interface PageCountProps {
  page: number;
  totalPage: number;
}

function PageCount({ page, totalPage }: PageCountProps) {
  return (
    <h6 className="text-body-secondary fw-light fs-6">
      Page {page} of {totalPage}
    </h6>
  );
}

export default PageCount;
