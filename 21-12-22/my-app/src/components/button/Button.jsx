import './button.css';


const buttonVariantMap = {
  primary: 'text-xl color-pink',
  no_touch: 'text-sm color-red',
  game: 'text-sm color-green',
}

export function Button(props) {
  console.log('props di Button:', props);

  const { 
    className = '',
    children = 'Non ho {children}',
    variant = 'none',
    ...otherAttributes
  } = props;

  return (
      <button
          className={`Button Button--variant-${variant} ${className}`}
          {...otherAttributes}
      >
        {children}
      </button>
  );
}