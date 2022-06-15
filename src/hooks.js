import { useEffect } from "react";
import { loadModules } from 'esri-loader';

export const useCreateMap = (mapRef) => {
    useEffect(() => {
        let view;
        
        const initializeMap = async (mapRef) => {
            const modules = ["esri/Map", "esri/views/MapView"];
            const [Map, MapView] = await loadModules(modules);
            const map = new Map({ basemap: "topo-vector" });
            view = new MapView({
                map: map,
                zoom: 13,
                container: mapRef.current,
                center: [-100.33, 25.69],
                ui: {
                    components: ["attribution"]
                }
            });
        };

        initializeMap(mapRef);
    },);
};