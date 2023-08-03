export async function MDImage(props: any) {
  return (
    <img
      src={`${props.src}`}
      className={`${props.className}`}
      alt={props.alt}
      loading="lazy"
    />
  );
}
