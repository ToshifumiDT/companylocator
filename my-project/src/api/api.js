// test
export const fetchCompanies = async (municipality) => {
    // API simulate
    const dummyCompanies = [
      { id: 1, name: 'Company A', established: '1990', category: 'Retail', employees: 50, industry: 'Retail' },
      { id: 2, name: 'Company B', established: '2000', category: 'Tech', employees: 200, industry: 'Software' },
      { id: 3, name: 'Company C', established: '2010', category: 'Finance', employees: 100, industry: 'Banking' },
    ];
  
 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyCompanies);
      }, 1000); 
    });
  };
  