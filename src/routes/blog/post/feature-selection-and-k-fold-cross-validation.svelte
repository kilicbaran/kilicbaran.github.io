<script context="module">
  import { base } from "$app/paths";

  export async function load({ fetch }) {
    const slug = "feature-selection-and-k-fold-cross-validation";

    const { metadata } = await fetch(`${base}/blog/post/${slug}.json`).then(
      (r) => r.json()
    );

    return {
      props: { metadata },
    };
  }
</script>

<script>
  import BlogLayout from "$lib/components/BlogLayout.svelte";

  export let metadata;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://github.githubassets.com/assets/gist-embed-33f755ffe42a.css"
  />
</svelte:head>

<BlogLayout {metadata}>
  <p>
    I am reading papers about fraudulent transaction analysis on blockchain
    using machine learning. A pattern in the data preprocessing and model
    evaluation parts of the papers (<a
      href="https://security.cse.iitk.ac.in/sites/default/files/17111003.pdf"
      target="_blank"
      rel="noopener noreferrer nofollow">[1]</a
    >,
    <a
      href="https://link.springer.com/chapter/10.1007/978-3-030-49785-9_7"
      target="_blank"
      rel="noopener noreferrer nofollow">[2]</a
    >,
    <a
      href="https://izgzhen.github.io/bitscope-public/paper.pdf"
      target="_blank"
      rel="noopener noreferrer nofollow">[3]</a
    >) caught my eye. First, select the features. Second, train the model and
    evaluate it with cross-validation. Since the authors don't give any detailed
    explanation or the source code, we can't be 100% sure about how they did it.
    However, I got the impression from their descriptions that they use the
    whole data set when applying feature selection. This is not the correct way
    of selecting features because it causes overfitting and biases the results.
    In fact, it has a name:
    <a
      href="https://machinelearningmastery.com/data-leakage-machine-learning/"
      target="_blank"
      rel="noopener noreferrer">data leakage</a
    >.
  </p>

  <p>
    The test set assesses the trained model. You cannot use it to select any
    features or tune any hyperparameters. If you want to apply feature selection
    either split your data into training and test and use training data for
    feature selection and then test your trained model with test set or apply
    feature selection using your training set at each step of your
    cross-validation.
  </p>

  <p>
    Let me illustrate the issue with an example. I will use a synthetic data
    set, train multiple classifiers, and report the F1 score with feature
    selection before cross-validation and inside cross-validation.
  </p>

  <div class="max-w-screen-lg mx-auto">
    <div id="gist111015028" class="gist">
      <div class="gist-file" translate="no">
        <div class="gist-data">
          <div
            class="js-gist-file-update-container js-task-list-container file-box"
          >
            <div
              id="file-feature_selection_and_cross_validation-ipynb"
              class="file my-2"
            >
              <div
                itemprop="text"
                class="Box-body p-0 blob-wrapper data type-jupyter-notebook  "
              >
                <div class="render-wrapper ">
                  <div
                    class="render-container is-render-pending js-render-target "
                    data-identity="560bb7a1-b9c7-4f1f-88e3-4ea14d772189"
                    data-host="https://notebooks.githubusercontent.com"
                    data-type="ipynb"
                  >
                    <svg
                      style="box-sizing: content-box; color: var(--color-icon-primary);"
                      width="64"
                      height="64"
                      viewBox="0 0 16 16"
                      fill="none"
                      data-view-component="true"
                      class="octospinner mx-auto anim-rotate"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="currentColor"
                        stroke-opacity="0.25"
                        stroke-width="2"
                        vector-effect="non-scaling-stroke"
                      />
                      <path
                        d="M15 8a7.002 7.002 0 00-7-7"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        vector-effect="non-scaling-stroke"
                      />
                    </svg>
                    <div class="render-viewer-error">
                      Sorry, something went wrong. <a
                        href="https://gist.github.com/kilicbaran/baee4d9cfdde04cb4469ce7672884b91.js"
                        >Reload?</a
                      >
                    </div>
                    <div class="render-viewer-fatal">
                      Sorry, we cannot display this file.
                    </div>
                    <div class="render-viewer-invalid">
                      Sorry, this file is invalid so it cannot be displayed.
                    </div>
                    <iframe
                      class="render-viewer "
                      src="https://notebooks.githubusercontent.com/view/ipynb?color_mode=auto&amp;commit=72737cce4e5d0aab1921b2df49d7f552fcc7b2b0&amp;enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f676973742f6b696c6963626172616e2f62616565346439636664646530346362343436396365373637323838346239312f7261772f373237333763636534653564306161623139323162326466343964376635353266636337623262302f466561747572655f53656c656374696f6e5f616e645f43726f73735f56616c69646174696f6e2e6970796e62&amp;logged_in=true&amp;nwo=kilicbaran%2Fbaee4d9cfdde04cb4469ce7672884b91&amp;path=Feature_Selection_and_Cross_Validation.ipynb&amp;repository_id=111015028&amp;repository_type=Gist#560bb7a1-b9c7-4f1f-88e3-4ea14d772189"
                      sandbox="allow-scripts allow-same-origin allow-top-navigation"
                      title="File display"
                      name="560bb7a1-b9c7-4f1f-88e3-4ea14d772189"
                    >
                      Viewer requires iframe.
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gist-meta">
          <a
            href="https://gist.github.com/kilicbaran/baee4d9cfdde04cb4469ce7672884b91/raw/72737cce4e5d0aab1921b2df49d7f552fcc7b2b0/Feature_Selection_and_Cross_Validation.ipynb"
            style="float:right">view raw</a
          >
          <a
            href="https://gist.github.com/kilicbaran/baee4d9cfdde04cb4469ce7672884b91#file-feature_selection_and_cross_validation-ipynb"
          >
            Feature_Selection_and_Cross_Validation.ipynb
          </a>
          hosted with &#10084; by <a href="https://github.com">GitHub</a>
        </div>
      </div>
    </div>
  </div>

  <p>
    As you can see in this example, you can boost your model's F1 score up to 14
    percent if you apply feature selection in the wrong way.
  </p>

  <p>
    In summary, applying feature selection before cross-validation can bias your
    results. Please use don't use your test set for anything other than
    evaluating your model.
  </p>
</BlogLayout>
