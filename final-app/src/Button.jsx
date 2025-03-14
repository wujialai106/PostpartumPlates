import './button.css';

function Button({ onClick, children, visual, type}) {
  let buttonClass = '';
  if (visual === 'link') {
    buttonClass = 'button-link';
  }
  if (visual === 'button') {
    buttonClass = 'button-button';
  }
  if (visual === 'title') {
    buttonClass = 'button-title';
  }
  if (visual === 'carousel') {
    buttonClass = 'button-carousel';
  }
  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}</button>
  );
}

export default Button;
