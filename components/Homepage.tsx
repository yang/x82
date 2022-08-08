import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default function Homepage(props: any) {
  return (
    <PlasmicComponent
      forceOriginal
      component={"Homepage"}
      componentProps={{
        ...props,
        button: {
          onClick: () => alert(),
        },
      }}
    />
  );
}
