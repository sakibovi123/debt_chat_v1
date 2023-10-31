const Footer = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="container max-w-[1280px] mx-auto text-center text-sm text-gray-500 px-4 py-8 sm:p-8 leading-6">
        <p className="mb-8">
          IMPORTANT DISCLAIMER: Programs range from 12 to 48 months. Customers
          who are able to stay in the program and pay off all their debt see
          savings of approximately 50% before fees, or 30% including program
          fees, over 24 to 48 months. All claims are based on registered debts.
          Not all debts are eligible for registration. Not all clients complete
          the program for various reasons, including their ability to save
          sufficient funds. Estimates based on previous results, which will vary
          depending on specific circumstances. The programs do not guarantee
          that your debts will be reduced by a specific amount or percentage or
          that you will be debt-free within a specific time period. The programs
          do not assume consumer debt, make monthly payments to creditors, or
          provide tax, bankruptcy, accounting, legal advice or credit repair
          services. Programs are not available in all states and rates may vary
          by state. Contact a tax professional to discuss the tax consequences
          of the liquidation. Consult a bankruptcy attorney for more information
          about bankruptcy. Depending on your state, there may be programs
          available to recommend a local tax professional and/or bankruptcy
          attorney. You may be subject to collections or demands by creditors or
          collectors. Your outstanding debt may increase due to the accumulation
          of fees and interest. Please read and understand all program materials
          before enrolling, including the potential adverse impact on credit
          rating.
        </p>

        <p className="mb-8">
          Certain types of debt are not eligible for enrollment. Some creditors
          are not eligible to enroll because they do not deal with debt relief
          companies.
        </p>

        <p className="text-blue-500">
          <a
            href="https://savingproviders.com/survey2/terms.html"
            target="_blank"
          >
            Privacy Policy
          </a>{" "}
          <span>|</span>{" "}
          <a href="https://savingproviders.com/survey2/privacy.html" target="_blank">Terms and Conditions</a>
        </p>
      </div>
    </div>
  );
}
export default Footer