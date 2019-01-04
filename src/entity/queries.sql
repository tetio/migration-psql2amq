create
	table
		ffcc ( ID serial not null primary key,
		config json null,
		data jsonb not null );

select
	count(1)
from
	ffcc;

delete
from
	ffcc;

commit;

select
	data -> 'equipos'
from
	ffcc
where
	data -> 'idExp' = '6792639';

select
	data -> 'idExp'
from
	ffcc
where
	data -> 'equipos' -> 'matricula' = '';

select
	c.data->'fechaSalidaPrevista' as ETA,
	equipos -> 'precinto' as SEL
from
	ffcc c,
	jsonb_array_elements(c.data->'equipos') as equipos
where
	equipos ->> 'matricula' = 'MEDU3499072';

select
	c.data->'fechaSalidaPrevista' as ETA,
	equipos -> 'precinto' as SEL
from
	ffcc c,
	jsonb_array_elements(c.data->'equipos') as equipos
where
	equipos ->> 'matricula' = 'MEDU3499072'
	and (c.data->>'fechaSalidaPrevista' >= '2014-02-01'
	and c.data->>'fechaSalidaPrevista'< '2014-03-01');



    select
	c.data->'fechaSalidaPrevista' as ETA,
	equipos -> 'precinto' as SEL
from
	ffcc c,
	jsonb_array_elements(c.data->'equipos') as equipos
where
	equipos ->> 'matricula' like 'MEDU%'
	and (c.data->>'fechaSalidaPrevista' >= '2014-02-01'
	and c.data->>'fechaSalidaPrevista'< '2014-03-01');