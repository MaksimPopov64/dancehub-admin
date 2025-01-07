import { Button } from "@/components/ui/button";
import { Map, GeolocationControl, Placemark } from "@pbe/react-yandex-maps";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <section className="relative px-4 min-h-[600px] flex-col items-center justify-center bg-gradient-to-r from-tertiary to-primary text-white">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Адрес: Астраханская, 103
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold">Телефон:</h1>
        <h1 className="text-3xl md:text-4xl font-bold">telegram</h1>
        <h1 className="text-3xl md:text-4xl font-bold">Как добраться:</h1>
      </div>
      <section className="flex justify-center mt-6">
        <Map
          defaultState={{
            center: [51.543262, 46.012736],
            zoom: 17,
            controls: [],
          }}
          width="80vw"
          heigh="100%"
        >
          <GeolocationControl options={{ float: "left" }} />
          <Placemark geometry={[51.5431, 46.01289]} />
        </Map>
      </section>
      <section className="flex justify-center mt-6">
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-tertiary text-white">
            На главную
          </Button>
        </Link>
      </section>
    </section>
  );
};

export default Contacts;
