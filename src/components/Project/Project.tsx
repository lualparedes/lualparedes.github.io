import React from 'react';

interface IProps {
  archived?: boolean;
  description: string;
  img: string;
  liveLink: string;
  onClickImg?: () => void;
  sourceLink?: string;
  stack: string;
  title: string;
  variant: 'left' | 'right';
}

const Project = ({
  archived,
  description,
  img,
  liveLink,
  onClickImg,
  sourceLink,
  stack,
  title,
  variant,
}: IProps): JSX.Element => {
  const variantClassContent =
    variant === 'right' ? 'project-content--right' : 'project-content--left';
  const variantClassImg =
    variant === 'right'
      ? 'project-content__img--right'
      : 'project-content__img--left';

  return (
    <div className="project">
      <div className="wrap">
        <div className={`project-content ${variantClassContent}`}>
          <h3 className="project-content__title">{title}</h3>
          {!!onClickImg ? (
            <>
              <div
                className={`
                  project-content__img
                  project-content__img--clickable
                  ${variantClassImg}
                `}
                onClick={onClickImg}
              >
                <img src={img} alt="Project preview" />
              </div>
            </>
          ) : (
            <>
              <div className={`project-content__img ${variantClassImg}`}>
                <img src={img} alt="Project preview" />
              </div>
            </>
          )}
          <p className="project-content__summary">
            {description}.&nbsp;
            {!archived ? (
              <>
                The code for the frontend is available&nbsp;
                <a target="_blank" rel="noopener noreferrer" href={sourceLink}>
                  here
                </a>
                &nbsp;and a live version can be found&nbsp;
                <a target="_blank" rel="noopener noreferrer" href={liveLink}>
                  here
                </a>
                .
              </>
            ) : (
              <>
                An archived version can be found&nbsp;
                <a target="_blank" rel="noopener noreferrer" href={liveLink}>
                  here
                </a>
                .
              </>
            )}
          </p>
          <p className="project-content__tech-stack">
            <span>Tech stack: </span>
            {stack}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Project };
