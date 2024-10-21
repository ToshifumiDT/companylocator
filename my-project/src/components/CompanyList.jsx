import './CompanyList.css';

function CompanyList({ companies, onCompanyClick }) {
    if (companies.length === 0) {
      return <p>No companies found for this municipality.</p>;
    }
  
    return (
      <div>
        <h2>Company List</h2>
        <ul>
          {companies.map((company) => (
            <li key={company.id}>
              <button onClick={() => onCompanyClick(company)}>
                {company.name} (Established: {company.established})
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CompanyList;
  