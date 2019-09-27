import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;
  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="LandingPage" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="LandingPage" className={css.link}>
                    <FormattedMessage id="Footer.toHelpPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" to={{ hash: '#contact' }} className={css.link}>
                    <FormattedMessage id="Footer.toContactPage" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.searches}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Sofia%2C%20Bulgaria&bounds=42.896425%2C23.678672%2C42.412497%2C23.051092&origin=42.7%2C23.33333',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchSofia" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Plovdiv%2C Plovdiv Province%2C Bulgaria&bounds=42.200069%2C24.843531%2C42.089342%2C24.652632&origin=42.14333%2C24.74889',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchPlovdiv" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Varna%2C Bulgaria&bounds=43.600267%2C28.146745%2C42.815993%2C27.065744&origin=43.20778%2C27.91694',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchVarna" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Burgas%2C Burgas Province%2C Bulgaria&bounds=42.713905%2C27.571386%2C42.371243%2C27.211493&origin=42.5%2C27.46667',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchBurgas" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Ruse%2C Ruse Province%2C Bulgaria&bounds=43.981813%2C26.359226%2C43.721878%2C25.860395&origin=43.8475%2C25.95444',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchRuse" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.searchesExtra}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Stara Zagora%2C Stara Zagora Province%2C Bulgaria&bounds=42.561417%2C25.916042%2C42.189428%2C25.28231&origin=42.42472%2C25.62556',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchStaraZagora" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Pleven%2C Pleven Province%2C Bulgaria&bounds=43.564295%2C24.954163%2C43.203482%2C24.391251&origin=43.40778%2C24.62028',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchPleven" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Sliven%2C Sliven Province%2C Bulgaria&bounds=42.954891%2C26.669243%2C42.443213%2C26.038057&origin=42.68083%2C26.31639',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchSliven" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Dobrich%2C Dobrich Province%2C Bulgaria&bounds=43.627174%2C27.891226%2C43.52467%2C27.71369&origin=43.56667%2C27.83333',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchDobrich" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Shumen%2C Shumen Province%2C Bulgaria&bounds=43.434927%2C27.214664%2C43.101297%2C26.732073&origin=43.27%2C26.92444',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchShumen" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.extraLinks}>
              <div className={css.someLinks}>{socialMediaLinks}</div>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
