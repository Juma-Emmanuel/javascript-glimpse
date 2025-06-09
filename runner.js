const company = {
  companyName: "Tutorials Point",
  companyWebsite: "www.tutorialspoint.com",

  getInfo: function() {
    console.log("Company Name:", this.companyName);
    console.log("Website:", this.companyWebsite);
  },
};

company.getInfo();