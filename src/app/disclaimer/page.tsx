
export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8">Disclaimer</h1>
        <div className="prose lg:prose-xl max-w-none text-muted-foreground space-y-4">
            <p>
                The information provided by Jan Vikas Kalyan Co-operative Thrift & Credit Society Ltd. on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
            <h2 className="text-2xl font-semibold font-headline text-foreground">Financial Disclaimer</h2>
            <p>
                The financial information provided is for informational purposes only and should not be considered as financial advice. All investments in co-operative societies are subject to risks. Members are advised to exercise their own discretion. Past performance is not indicative of future results.
            </p>
             <h2 className="text-2xl font-semibold font-headline text-foreground">External Links Disclaimer</h2>
            <p>
                The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
        </div>
      </div>
    </div>
  );
}
