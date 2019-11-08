import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const StepButton = styled(Button)({
  color: '#009fdf',
});

function ActionBar(props) {
  const {
    page,
    isLastPage,
    isSubmitting,
    onCancel,
    onPrevious,
    onNext,
    onFinish,
    labelCancel,
    labelPrevious,
    labelNext,
    labelFinish,
  } = props;

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item>
        {onCancel && (
          <StepButton
            type="button"
            onClick={(event) => onCancel(event, 'cancel')}
          >
            {labelCancel}
          </StepButton>
        )}
      </Grid>

      <Grid item>
        {page > 0 && (
          <StepButton type="button" onClick={onPrevious}>
            {labelPrevious}
          </StepButton>
        )}

        {isLastPage ? (
          <StepButton type="submit" disabled={isSubmitting} onClick={onFinish}>
            {labelFinish}
          </StepButton>
        ) : (
          <StepButton type="submit" onClick={onNext}>
            {labelNext}
          </StepButton>
        )}
      </Grid>
    </Grid>
  );
}

ActionBar.propTypes = {
  page: PropTypes.number,
  isLastPage: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  onCancel: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  onFinish: PropTypes.func,
  labelCancel: PropTypes.string,
  labelPrevious: PropTypes.string,
  labelNext: PropTypes.string,
  labelFinish: PropTypes.string,
};

ActionBar.defaultProps = {
  page: 0,
  isLastPage: true,
  isSubmitting: false,
  onCancel: null,
  onPrevious: null,
  onNext: null,
  onFinish: null,
  labelCancel: 'Cancel',
  labelPrevious: 'Previous',
  labelNext: 'Next',
  labelFinish: 'Finish',
};

export default ActionBar;
