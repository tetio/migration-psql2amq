import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm'
import { FFCC_EQUIPOS } from './FFCCEquipo.entity';

@Entity({name: "FFCC_CABECERA", schema: "PORTIC"})
export class FFCC_CABECERA {
    @PrimaryGeneratedColumn({name: 'ID_EXP'}) idExp: number
    @Column({name: 'COD_SERVICIO'}) codServicio: string
    @Column({name: 'EMPRESA_FERROVIARIA'}) empresaFerroviaria: string
    @Column({name: 'OBSERVACIONES'}) observaciones: string
    @Column({name: 'EMPRESA_PROP'}) empresaPropietaria: string
    @Column({name: 'COD_ESTACION_ORIGEN'}) codEstacionOrigen: string
    @Column({name: 'ADIF_TERMINAL_ORIGEN'}) adifTerminalOrigen: string
    @Column({name: 'COD_TERMINAL_ORIGEN'}) codTerminalOrigen: string
    @Column({name: 'COD_ESTACION_DESTINO'}) codEstacionDestino: string
    @Column({name: 'ADIF_TERMINAL_DESTINO'}) adifEstacionDestino: string
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
    @OneToMany(type => FFCC_EQUIPOS, equipo => equipo.cabecera)
    @JoinColumn({ name: 'ID_EXP' })
    equipos: FFCC_EQUIPOS[];
}
