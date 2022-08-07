import styles from "./CSSModule.module.css";

const CSSModule = () => {
  console.log(styles);
  return (
    <div className="{styles.wrapper}">
      안녕하세요, 저는 <sapn className="{something}">CSS Module!</sapn>
    </div>
  );
};

export default CSSModule;
