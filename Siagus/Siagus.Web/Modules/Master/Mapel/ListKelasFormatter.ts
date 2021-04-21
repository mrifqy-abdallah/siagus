namespace Siagus.Master{

    @Serenity.Decorators.registerFormatter()
    export class ListKelasFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            let idList = ctx.value as number[];
            if (!idList || !idList.length)
                return "";

            let byId = KelasRow.getLookup().itemById;

            return idList.map(x => {
                let g = byId[x];
                if (!g)
                    return x.toString();

                return Q.htmlEncode(g.Kelas);
            }).join(", ");
        }
    }
}