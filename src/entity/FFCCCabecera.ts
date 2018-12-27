import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'

@Entity('FFCC_CABECERA', {schema: 'PORTIC'})
export class FFCC_CABECERA {
    @PrimaryGeneratedColumn({name: 'ID_EXP'}) idExp: number
    @Column({name: 'COD_SERVICIO'}) codServicio: string
    @Column({name: 'EMPRESA_FERROVIARIA'}) empresaFerroviaria: string
    @Column({name: 'OBSERVACIONES'}) observaciones: string
    @Column({name: 'EMPRESA_PROPIETARIA'}) empresaPropietaria: string
    @Column({name: 'COD_ESTACION_ORIGEN'}) codEstacionOrigen: string
    @Column({name: 'ADIF_ESTACION_ORIGEN'}) adifEstacionOrigen: string
    @Column({name: 'COD_TERMINAL_ORIGEN'}) codTerminalOrigen: string
    @Column({name: 'COD_ESTACION_DESTINO'}) codEstacionDestino: string
    @Column({name: 'ADIF_ESTACION_DESTINO'}) adifEstacionDestino: string
    @Column({name: 'COD_TERMINAL_DESTINO'}) codTerminalDestino: string
    @Column({name: 'FECHA_SALIDA_PREVISTA'}) fechaSalidaPrevista: Date
    @Column({name: 'FECHA_LLEGADA_PREVISTA'}) fechaLlegadaPrevista: Date
    @Column({name: 'FECHA_SALIDA_REAL'}) fechaSalidaReal: Date
    @Column({name: 'FECHA_LLEGADA_REAL'}) fechaLlegadaReal: Date
    @Column({name: 'ID_LISTA_CARGA'}) idListaCarga: number
    @Column({name: 'ID_LISTA_DESCARGA'}) idListaDescarga: number
    @Column({name: 'TERMINAL_USUARIA'}) terminalUsuaria: string
    @Column({name: 'PESO'}) PESO: number
    @Column({name: 'TEUS'}) TEUS: number
    @Column({name: 'NUMERO_TREN'}) numeroTren: string
    @Column({name: 'FECHA_OFICIAL_SALIDA'}) fechaOficialSalida: Date
}
