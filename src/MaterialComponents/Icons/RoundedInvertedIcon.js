import styled from '@emotion/styled';

function RoundedInvertedIcon(Icon) {
  return styled(Icon)(() => ({
    color: '#fff',
    backgroundColor: '#707070',
    borderRadius: '50%',
    '-moz-box-sizing': 'border-box',
    '-webkit-box-sizing': 'border-box',
    'box-sizing': 'border-box',
    padding: 3,
  }));
}

export default RoundedInvertedIcon;
