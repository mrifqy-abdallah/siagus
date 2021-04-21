namespace Siagus.Master {

    @Serenity.Decorators.registerFormatter()
    export class ListKelasParalelFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            let idList = ctx.value as number[];
            if (!idList || !idList.length)
                return "";

            let byId = KelasParalelRow.getLookup().itemById;

            return idList.map(x => {
                let g = byId[x];
                if (!g)
                    return x.toString();

                return Q.htmlEncode(g.Kelasparalel);
            }).join(", ");
        }
    }
}