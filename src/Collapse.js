export const Collapse = () => {
  return (
   <div className="container-fluid">
    <h3 className="text-center">Frequently asked questions</h3>
    <div className="accordion" id="pa">
       <div className="accordion-item">
        <div className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#q">what is NetFlix?</button>

        </div>
        <div className="accordion-collapse collapse bg-warning" id="q" data-bs-parent="#pa">
            <p>Lorem Designed and built with all the love in the world by the
          Bootstrap team with the help of our contributors.Designed and built
          with all the love in the world by the Bootstrap team with the help of
          our contributors.Designed and built with all the love in the world by
          the Bootstrap team with the help of our contributors.Designed and
          built with all the love in the world by the BootstrapDesigned and
          built with all the love in the world by the Bootstrap team with the
          help of our contributors.Designed and built with all the love in the
          world by the Bootstrap team with the help of our contributors.Designed
          and built with all the love in the world by the Bootstrap team with
          the help of our contributors.Designed and built with all the love in
          the world by the Bootstrap team with the help of our
          contributors.Designed and built with all the love in the world by the
          Bootstrap team with the help of our contributors. team with the help
          of our contributors.
        </p>

        </div>
        <div className="accordion-item">
            <div className="accordion-header">
                <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">What is FlipCart?</button>

            </div>
            <div className="accordion-collapse collapse" id="q1" data-bs-parent="#pa">
                <div className="accordion-body">
                <p>Lorem Designed and built with all the love in the world by the
          Bootstrap team with the help of our contributors.Designed and built
          with all the love in the world by the Bootstrap team with the help of
          our contributors.Designed and built with all the love in the world by
          the Bootstrap team with the help of our contributors.Designed and
          built with all the love in the world by the BootstrapDesigned and
          built with all the love in the world by the Bootstrap team with the
          help of our contributors.Designed and built with all the love in the
          world by the Bootstrap team with the help of our contributors.Designed
          and built with all the love in the world by the Bootstrap team with
          the help of our contributors.Designed and built with all the love in
          the world by the Bootstrap team with the help of our
          contributors.Designed and built with all the love in the world by the
          Bootstrap team with the help of our contributors. team with the help
          of our contributors.</p>
          </div>

            </div>

        </div>

       </div>
    </div>

   </div>
  );
};
