const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

document.addEventListener("keydown", getKeydown);

function getKeydown(e) {
  $(".container").innerHTML = `
            <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <div class="circle text-center">
                <span class="which-main">${e.keyCode}</span>
              </div>
            </div>

            <div class="col-12 mt-5">
              <div class="row">
                <div class="col-3">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-header text-center display-4">Key</div>
                    <div class="card-body">
                      <h5 class="card-title text-center mt-3 display-6">
                        ${e.key}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-header text-center display-4">Location</div>
                    <div class="card-body">
                      <h5 class="card-title text-center mt-3 display-6">
                        ${e.location}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-header text-center display-4">Which</div>
                    <div class="card-body">
                      <h5 class="card-title text-center mt-3 display-6">
                        ${e.keyCode}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-header text-center display-4">Code</div>
                    <div class="card-body">
                      <h5 class="card-title text-center mt-3 display-6">
                        ${e.code}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
}
