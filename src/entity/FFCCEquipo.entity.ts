import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm'
import { FFCC_CABECERA } from './FFCCCabecera.entity';

@Entity({ name: "FFCC_EQUIPOS", schema: "PORTIC" })
export class FFCC_EQUIPOS {
    @PrimaryColumn({ name: 'ID_EXP' }) idExp: number
    @PrimaryGeneratedColumn({ name: 'ID_EQUIPO' }) idEquipo: number
    @Column({ name: 'ID_LISTA_CARGA' }) idListaCarga: number
    @Column({ name: 'ID_LISTA_DESCARGA' }) idListaDescarga: number
    @Column({ name: 'CLASE_EQUIPO' }) claseEquipo: string
    @Column({ name: 'MATRICULA' }) matricula: string
    @Column({ name: 'TIPO_EQUIPO' }) tipoEquipo: string
    @Column({ name: 'PRECINTO' }) precinto: string
    @Column({ name: 'POSICION' }) posicion: string
    @Column({ name: 'VAGON' }) vagon: string
    @Column({ name: 'LLENO_VACIO' }) llenoVacio: string
    @Column({ name: 'TARA' }) tara: string
    @Column({ name: 'COD_ESTACION_CARGA' }) codEstacionCarga: string
    @Column({ name: 'ADIF_TERMINAL_CARGA' }) adifTerminalCarga: string
    @Column({ name: 'COD_ESTACION_DESCARGA' }) codEstacionDescarga: string
    @Column({ name: 'ADIF_TERMINAL_DESCARGA' }) adifTerminalDescarga: string
    @Column({ name: 'DIM_UNIDAD' }) dimUnidad: string
    @Column({ name: 'DIM_FRONT' }) dimFront: string
    @Column({ name: 'DIM_BACK' }) dimBack: string
    @Column({ name: 'DIM_RIGHT' }) dimRight: string
    @Column({ name: 'DIM_LEFT' }) dimLeft: string
    @Column({ name: 'DIM_HEIGHT' }) dimHeight: string
    @Column({ name: 'TEMP_UNDAD' }) tempUnidad: string
    @Column({ name: 'TEMP_VALOR' }) tempValor: string
    @Column({ name: 'TEMP_MIN' }) tempMin: string
    @Column({ name: 'TEMP_MAX' }) tempMax: string

    @Column({ name: 'CLIENTE_NOM' }) clienteNom: string
    @Column({ name: 'CLIENTE_NIF' }) clienteNif: string
    @Column({ name: 'CLIENTE_DIR' }) clienteDir: string

    @Column({ name: 'EMAIL_NOTIF' }) emailNotif: string
    @Column({ name: 'NUM_ORDEN_TRANSPORTE' }) numOrdenTransporte: string
    @Column({ name: 'CARGADOR' }) cargador: string

    @Column({ name: 'LUGAR_CARGA_DESCARGA' }) lugarCargaDescarga: string
    @Column({ name: 'FECHA_ENTR_SOLIC' }) fechaEntrSolic: Date
    @Column({ name: 'CONSIGNATARIO' }) consignatario: string
    @Column({ name: 'ARMADOR' }) armador: string
    @Column({ name: 'BOOKING' }) booking: string
    @Column({ name: 'BL' }) bl: string
    @Column({ name: 'NUM_ENTREGUESE' }) numEntreguese: string
    @Column({ name: 'NUM_ADMITASE' }) numAdmitase: string
    @Column({ name: 'REGIMEN_ADUANERO' }) regimenAduanero: string
    @Column({ name: 'INSTRUCCIONES_CARGA' }) instruccionesCarga: string
    @Column({ name: 'TRANSPORTE_ANTERIOR' }) transporteAnterior: string
    @Column({ name: 'TRANSP_ANTE_LLOYDS' }) transpAnteLloyds: string
    @Column({ name: 'TRANSP_ANTE_NOM_BARCO' }) transpAnteNomBarco: string
    @Column({ name: 'TRANSPORTE_POSTERIOR' }) transportePosterior: string
    @Column({ name: 'TRANSP_POST_LLOYDS' }) transpPostLloyds: string
    @Column({ name: 'TRANSP_POST_NOM_BARCO' }) transpPostNomBarco: string
    @Column({ name: 'TRANSP_POSTE_DESC_COD' }) transpPosteDescCod: string
    @Column({ name: 'TRANSP_POSTE_DESC_NOM' }) transpPosteDescNom: string
    @Column({ name: 'INCIDENCIAS' }) incidencias: string
    @Column({ name: 'DEMORA' }) demora: string
    @Column({ name: 'ROUNDTRIP' }) roundtrip: string
    @Column({ name: 'CONCEPTOS_FACTURACION' }) conceptosFacturacion: string
    @Column({ name: 'LOCALIDAD_ACARREO_FACTURACION' }) localidadAcarreoFacturacion: string
    @Column({ name: 'LUGAR_CARGA_DESCARGA_NIF' }) lugarCargaDescargaNif: string
    @Column({ name: 'FECHA_PREVISTA_SALIDA' }) fechaPrevistaSalida: Date
    @Column({ name: 'ORDEN_SALIDA' }) ordenSalida: string

    @ManyToOne(type => FFCC_CABECERA)
    @JoinColumn({ name: 'ID_EXP' })
    cabecera: FFCC_CABECERA;
}