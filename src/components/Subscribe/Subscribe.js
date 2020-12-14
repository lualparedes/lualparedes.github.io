import React from "react";
import Image from "gatsby-image";

import IconArrowForward from "../icons/IconArrowForward";
import ButtonIcon from "../ButtonIcon";

import "./style.css";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <p className="Subscribe__description">
        Subscribe for more<br />
        web development tips!
      </p>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us2.list-manage.com/subscribe/post?u=81f5f28fdffec0498a75c1527&amp;id=cff01cbe3f"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label for="mce-NAME" className="label">
                Name
              </label>
              <input
                type="text"
                defaultValue=""
                name="NAME"
                className="required in in--subscribe"
                id="mce-NAME"
              />
            </div>
            <div className="mc-field-group">
              <label for="mce-EMAIL" className="label">
                Email
              </label>
              <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="required email in in--subscribe"
                id="mce-EMAIL"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: -5000, ariaHidden: "true" }}
            >
              <input
                type="text"
                name="b_81f5f28fdffec0498a75c1527_cff01cbe3f"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button btn btn--submit"
              >
                <span class="btn__label">Subscribe</span>
                <ButtonIcon>
                  <IconArrowForward />
                </ButtonIcon>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Subscribe };
