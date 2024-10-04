import { useGetProductField } from "@/api/getProductField";
import NavbarPage from "@/components/NavbarPage/NavbarPage";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOriginProps = {
    setFilterOrigin: (genero: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props;
    const { result, loading }: FilterTypes = useGetProductField()

    return (
        <div>
            <div className="my-5">
            <p className="mb-3 font-bold">Genero</p>
            {loading && result === null && (
                <p>Cargando genero...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result !== null && result.schema.attributes.genero.enum.map((genero: string) => (
                    <div key={genero} className="flex items-center space-x-2">
                        <RadioGroupItem value={genero} id={genero} />
                        <Label htmlFor={genero}>{genero}</Label>
                    </div>
                ))}
            </RadioGroup>
            </div>
        </div>
    );
}

export default FilterOrigin;