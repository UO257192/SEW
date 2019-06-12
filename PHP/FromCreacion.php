<?php
    $xml = new DOMDocument();
    $xml->load('../XML/Ingredientes.xml');
    
    $xsl = new DOMDocument();
    $xsl->load('../XML/ingredientes.xsl');
    
    $proc = new XSLTProcessor();
    $proc->importStyleSheet($xsl);
    
    echo $proc->transformToXML($xml);
?>