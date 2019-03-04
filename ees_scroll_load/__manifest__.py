{
    'name': 'EESTISOFT scroll load',
    'version': '12.0.1.0',
    'author': 'EESTISOFT,''Hideki Yamamoto',
    'category': 'Productivity',
    'website': 'http://www.eestisoft.com',
    'sequence': 2,
    'summary': 'Adds loading of new records for kanban and tree views in a select view',
    'description': """

Automatic load more record on scroll in any select (search) views
============
Adds loading of new records for kanban and tree views in a select view.

Steps:
1-Install module
2-Restart odoo service - this is important for somewhat reason.
3-Clear browser cache and goto any odoo page with a search view and more than 80 results
4-Scroll down and notice loading of new records.

Made with love.

    """,
	'images':['static/description/thumb.png'],
    'depends': ['web'],
    'data': [
		'views/ees_scroll_load.xml',
    ],	
    'qweb': ['static/src/xml/ees_scroll_load.xml'],
    'installable': True,
    'application': True,
    'auto_install': False
}
